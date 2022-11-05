export default function MainModal({ children, visible, onClose }) {
  if (!visible) return null;

  const handleOnBackDropClick = (e) => {
    if (e.target.id === "backdrop" || e.target.id === "backdrop1")
      onClose && onClose();
  };

  return (
    <div
      id="backdrop1"
      onClick={handleOnBackDropClick}
      className="z-10 fixed mx-auto inset-0 blur-[0px] overflow-auto"
    >
      <div id="backdrop" className="mx-auto mt-[150px] overflow-auto">
        {children}
      </div>
    </div>
  );
}
