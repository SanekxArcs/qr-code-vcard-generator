import QrCodeApp from "../QrCodeGenerator/QrCodeGenerator";

function App() {
  return (
    <div className=" py-5 bg-gray-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900 grid place-items-center min-h-screen">
      <div className="w-full mx-auto grid place-items-center">
        <QrCodeApp />
      </div>
    </div>
  );
}

export default App;
