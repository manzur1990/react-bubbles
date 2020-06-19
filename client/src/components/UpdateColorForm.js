import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilis/axiosWithAuth';



const UpdateColors = props => {
    const [color, setColor] = useState(initialColor);

    const initialColor = {
        color: '',
        code: { hex: '' }
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth
            .put(`/api/colors/${this.color.id}`, this.color)
            .then(res => {
                const newColors = this.props.colors.map(() => {
                    if (res === this.props.match.params.id) this.props.setColor(newColors);
                });
                this.props.history.push('/api/colors');
            })
            .catch(err => {
                return console.log(err.response);
            });





        useEffect(
            () => {
                const colorToEdit = this.props.colors.find(color => `${color.id}` === props.match.params.id);
                if (colorToEdit) setColor(colorToEdit);
            },
            [props.colors, props.match.params.id]
        );

        const onChange = e => {
            e.persist();
            let value = e.target.value;
        };

        setColor({
            ...color,
            [this.e.target.name]: this.value
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Edit</h2>
                <input
                    type="text"
                    name="color"
                    onChange={this.onChange}
                    placeholder="Color Name"
                    value={this.color.color}
                />

                <input
                    type="text"
                    name="hex"
                    onChange={this.onChange}
                    placeholder="Hex Code"
                    value={this.color.code.hex}
                />

                <button className="update button">Update</button>
            </form>
        </div>
    );
};

export default UpdateColors; 