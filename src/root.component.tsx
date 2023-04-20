// @ts-nocheck
import { Navigate } from "@stagepass/osiris-ui";
import { useStore } from "@stagepass/util-state";
import { useAuth } from "@stagepass/app-auth";

export default function Root(props) {
  const store = useStore();

  const { signOut } = useAuth();

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
      <button type="button" onClick={() => signOut()}>
        DESLOGAR
      </button>
    </>
  );
}
