import useModal from "./Components/Context/ModalConfirmation/UseModal";

export default function PruebaModal() {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal({
      titleModal: "¡Atención!",
      textModal: "¿Estás seguro de continuar?",
      onConfirm: () => {
        console.log("Usuario aceptó 😎");
      },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Open</button>
    </div>
  );
}
