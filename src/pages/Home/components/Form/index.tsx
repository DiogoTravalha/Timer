import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export default function Form() {
  const { activeCycle, cycles } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Nome do projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />
      {cycles.length > 0 && (
        <datalist id="task-suggestions">
          {cycles?.map((cycle) => {
            return <option key={cycle.id} value={cycle.task} />;
          })}
        </datalist>
      )}

      <label htmlFor="">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={0}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
