import Button from "../Ui/Button/Button";
import Input from "../Ui/Input/Input";
import "./Form.css";
import HandleInputs from "./HandleForm/HandleInputs";

export default function Form() {
  const { form, errors, handleInput, onSubmit } = HandleInputs();

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 ">
      <form action="" className="formContainer">
        <div className="py-4">
          <h2 className="fw-bold ">Form</h2>
          <small className="text-secondary">Please register to continue!</small>
        </div>

        <div className="row formContent">
          <div className="d-flex gap-3">
            <div className="col-lg-6 mb-3">
              <Input
                name="name"
                value={form.name}
                onChange={handleInput}
                label="First name"
                placeholder="Enter your first name"
                error={errors.name}
              />
            </div>

            <div className="col-lg-6">
              <Input
                name="LastName"
                value={form.LastName}
                onChange={handleInput}
                label="Last name"
                placeholder="Enter your last name"
                error={errors.LastName}
              />
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="col-lg-6">
              <Input
                name="Adress"
                value={form.Adress}
                onChange={handleInput}
                label="Address"
                placeholder="Example: cra 2d 12-1"
                error={errors.Adress}
              />
            </div>

            <div className="col-lg-6">
              <Input
                name="email"
                value={form.email}
                onChange={handleInput}
                label="Email"
                placeholder="Example: example@gmail.com"
                error={errors.email}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-3 mx-2">
          <Button
            functionButton={onSubmit}
            labelButton="Send"
            colorMode={false}
          />
        </div>
      </form>
    </div>
  );
}
