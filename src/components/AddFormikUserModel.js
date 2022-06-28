import React from "react";
import { useFormik } from "formik";

const AddFormikUserModel = () => {
    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            address: "",
            contact: ""
        }
    })
    console.log("form Values :", formik.values)
    return (
        <>
            <div className="add-form-model">
                <form>
                    <div className="form-data">
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            placeholder="EnterName"
                            onChange={formik.handleChange}
                            value={formik.values.name}

                        />
                    </div>
                    <div className="form-data">
                        <label>Email_d</label>
                        <input type="email"
                            name="email"
                            placeholder="Enter Email-Id"
                            onChange={formik.handleChange}
                            value={formik.values.email}

                        />
                    </div>
                    <div className="form-data">
                        <label>Address</label>
                        <input type="text"
                            name="address"
                            placeholder="Enter Address"
                            onChange={formik.handleChange}
                            value={formik.values.address}

                        />
                    </div>
                    <div className="form-data">
                        <label>Contact</label>
                        <input type="number"
                            name="contact"
                            placeholder="Enter Contact No"
                            onChange={formik.handleChange}
                            value={formik.values.contact}

                        />
                    </div>
                    <button
                        style={{ marginTop: 10, padding: '5px 40px' }}
                        type="submit">Submit
                    </button>
                </form>
            </div>
        </>
    )
}
export default AddFormikUserModel;