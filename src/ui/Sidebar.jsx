function Sidebar({ setShowSidebar }) {
  return (
    <div className="flex h-screen w-72 flex-col items-start space-y-4 rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-4 flex w-full items-center justify-between">
        <div>Sidebar</div>
        <button onClick={() => setShowSidebar((show) => !show)}>&times;</button>
      </div>

      <div className="rounded-md bg-blue-500 p-4 text-white">Item 2</div>
      <div className="rounded-md bg-blue-500 p-4 text-white">Item 3</div>
      <div className="rounded-md bg-blue-500 p-4 text-white">Item 4</div>
    </div>
  );
}

export default Sidebar;
