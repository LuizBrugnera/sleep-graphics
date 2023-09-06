import React, { FormEvent, useState } from "react";
import * as S from "../styles";
import { SleepDataService } from "./services/SleepDataService";
import { SleepDataAllPersonsDTO } from "./dto/SleepDataDto";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type FormAddSleepDataProps = {
  setSleepData: React.Dispatch<React.SetStateAction<SleepDataAllPersonsDTO[]>>;
};

const FormAddSleepData = ({ setSleepData }: FormAddSleepDataProps) => {
  const [sleepTime, setSleepTime] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [name, setName] = useState("undefined");
  const [password, setPassword] = useState("");

  function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Os meses são de 0 a 11, então acrescentamos +1 para ficar correto
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  const valid = () => {
    if (name === "undefined") {
      setMessage({
        text: "Escolha o seu nome!",
        type: "error",
      });
      return false;
    }
    if (date === null) {
      setMessage({ text: "Escolha a data!", type: "error" });
      return false;
    }
    if (sleepTime === "") {
      setMessage({ text: "Escolha o tempo de sono!", type: "error" });
      return false;
    }
    if (password === "") {
      setMessage({ text: "Digite a senha", type: "error" });
      return false;
    }

    const isValid = /^([0-9]{1,2}|1[0-9]|2[0-3]):[0-5][0-9]$/.test(sleepTime);
    if (!isValid) {
      setMessage({
        text: "Formato de tempo de sono inválido!",
        type: "error",
      });
      return false;
    }
    setMessage({ text: "", type: "sucess" });
    return true;
  };

  const handleButton = async (event: FormEvent) => {
    event.preventDefault();
    if (valid()) {
      const data = await SleepDataService.create({
        name,
        date: formatDate(date!),
        sleepTime,
        password,
      });
      if (data === undefined) {
        setMessage({
          text: "Senha incorreta!",
          type: "error",
        });
        return;
      } else if (data) {
        setMessage({ text: "Dados adicionados com sucesso!", type: "sucess" });
        const DataList = await SleepDataService.getGroupedSleepData();
        if (DataList) {
          setSleepData(DataList);
        }
        setName("undefined");
        setDate(null);
        setSleepTime("");
      } else {
        setMessage({
          text: "Erro ao adicionar os dados, tente novamente!",
          type: "error",
        });
      }
    }
  };
  return (
    <S.FormContainer>
      <S.FormTitle id="form-add">Adicionar Dados de Sono</S.FormTitle>
      <S.Form>
        <S.FormLabel htmlFor="user">Escolha o Seu nome</S.FormLabel>
        <S.FormSelect
          name="user"
          id="user"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setName(e.target.value)
          }
          value={name}
        >
          <option value="undefined">Escolha o seu nome</option>
          <option value="Everson">Everson</option>
          <option value="Davy">Davy</option>
          <option value="Gabriel">Gabriel</option>
          <option value="Guilherme">Guilherme</option>
          <option value="Henrique">Henrique</option>
          <option value="Kaiki">Kaiki</option>
          <option value="Luiz">Luiz</option>
          <option value="Robson">Robson</option>
        </S.FormSelect>
        <S.FormLabel htmlFor="date">Data</S.FormLabel>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat={"dd-MM-yyyy"}
          maxDate={new Date()}
        />

        <S.FormLabel htmlFor="sleepTime">Tempo de Sono</S.FormLabel>
        <S.FormInput
          type="text"
          name="sleepTime"
          id="sleepTime"
          placeholder="no formato 0:00"
          value={sleepTime}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSleepTime(e.target.value)
          }
        />

        <S.FormLabel htmlFor="password">Senha</S.FormLabel>
        <S.FormInput
          type="text"
          name="password"
          id="password"
          placeholder="Digite a senha"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <S.WarningMessage typeMessage={message.type}>
          {message.text}
        </S.WarningMessage>
        <S.FormButton onClick={handleButton}>Adicionar</S.FormButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default FormAddSleepData;
