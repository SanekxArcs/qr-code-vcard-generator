import QrCodeApp from "../QrCodeGenerator/QrCodeGenerator";

function App() {
  return (
    <div className="grid py-20 bg-gray-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900 place-items-center">
      <div className="container mx-auto ">
        <QrCodeApp />
      </div>
    </div>
  );
}

export default App;
