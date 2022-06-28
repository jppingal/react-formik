import React from "react";

const AddFormikUserModel = () => {
    return (
        <>
            <div className="add-form-model">
                <form>
                    <div className="form-data">
                        <label>Name</label>
                        <input type="text" placeholder="EnterName" />
                    </div>
                    <div className="form-data">
                        <label>Email_d</label>
                        <input type="email" placeholder="Enter Email-Id" />
                    </div>
                    <div className="form-data">
                        <label>Address</label>
                        <input type="text" placeholder="Enter Address" />
                    </div>
                    <div className="form-data">
                        <label>Contact</label>
                        <input type="number" placeholder="Enter Contact No" />
                    </div>
                    <button style={{marginTop: 10, padding: '5px 40px'}} type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
export default AddFormikUserModel;