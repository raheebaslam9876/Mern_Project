const FormRow = ({ type, name, value, handleChange, labelText }) => {

    return (
        <div className="form-outline mb-4">
            <input type={type} name={name} value={value} onChange={handleChange} id="form3Example3" placeholder="Enter Name" className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor={name}>{labelText || name}</label>
        </div>
    )
}

export default FormRow
