

const CheckBox = ({ user, handleChange, value, check }) => {
    return (

        <label>
            <input type="checkbox"

                checked={value === user}


                onChange={(e) => handleChange(e, user)}


            />
            {user}

        </label>


    );
};

export default CheckBox;