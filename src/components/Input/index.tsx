import { ContainerInput, BaseInput, Icon } from "./style";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../styles/tokens";
import { InputProps } from "./types";

const Input = ({ placeholder, onChange }: InputProps) => {
  return (
    <ContainerInput>
      <BaseInput placeholder={placeholder} onChange={onChange} />
      <Icon icon={faMagnifyingGlass} color={colors.red} size="lg" />
    </ContainerInput>
  );
};

export default Input;
