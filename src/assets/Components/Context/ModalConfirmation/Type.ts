export interface optionsOpenModal {
  textModal: string;
  titleModal: string;
  onConfirm: () => void;
}

export interface modalOptions {
  openModal: (options: {
    textModal: string;
    titleModal: string;
    onConfirm: () => void;
  }) => void;
}
