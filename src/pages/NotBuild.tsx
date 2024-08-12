interface NotBuildType {
  pageName: string;
  desc: string;
}

export function NotBuild({ pageName, desc }: NotBuildType) {
  return (
    <main>
      <h3>{pageName}</h3>
      <span>{desc}</span>
      <button>Voltar</button>
    </main>
  );
}
