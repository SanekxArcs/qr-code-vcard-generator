import QrCodeApp from "../QrCodeGenerator/QrCodeGenerator";

function App() {
  return (
    <div className=" bg-gray-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900 ">
      <div className="container mx-auto grid place-items-center h-screen py-5">
        <QrCodeApp />
      </div>
    </div>
  );
}

export default App;
