// @ts-ignore
import { Navigate } from "@stagepass/osiris-ui";

// @ts-ignore
import { useStore } from "@stagepass/util-state";

export default function Root(props) {
  const store = useStore();

  return (
    <>
      <section>{props.name} is mounted!</section>
      <h3>COunter: {store.counter}</h3>
      <button type="button" onClick={store.increment}>
        Aumentar
      </button>
      <button type="button" onClick={store.decrement}>
        Diminuir
      </button>
      <Navigate path="/teste">Teste</Navigate>
    </>
  );
}
