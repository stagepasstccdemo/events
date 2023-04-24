// @ts-nocheck
import { Navigate } from "@stagepass/osiris-ui";
import { useStore } from "@stagepass/util-state";
import { useAuth } from "@stagepass/app-auth";
import { navigateToUrl } from "single-spa";

export function Home() {
  const store = useStore();
  const { signOut, userSession } = useAuth();

  return (
    <>
      <h1>@stagepass/events mounted</h1>
      <h3>COunter: {store.counter}</h3>
      <button type="button" onClick={store.increment}>
        Aumentar
      </button>
      <button type="button" onClick={store.decrement}>
        Diminuir
      </button>
      <Navigate path="/teste">Teste</Navigate>
      {userSession ? (
        <button type="button" onClick={() => signOut()}>
          DESLOGAR
        </button>
      ) : (
        <button type="button" onClick={() => navigateToUrl("/")}>
          Logar
        </button>
      )}

      {userSession && (
        <pre>User: {JSON.stringify(userSession.user.email, null, 2)}</pre>
      )}
    </>
  );
}
