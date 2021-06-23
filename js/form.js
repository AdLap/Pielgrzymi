import React, {useState} from "react";

export const Form = () => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
        city: '',
        post: '',
        street: '',
        houseNumber: '',
        apartmentNumber: '',
        email: '',
        quantity: '',
        check: true
    });

    const [errMsg, setErrMsg] = useState('');

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            /*send mail*/
        } else {
            console.log(errMsg);
        }
    }


    const validate = () => {
        let isValid = true;

        if (form.name.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + `Imię musi być dłuższe niż dwie litery\n`);
        }
        if (form.surname.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nazwisko musi być dłuższe niż dwie litery\n');
        }
        if (form.city.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nazwa miasta musi być dłuższe niż dwie litery\n');
        }
        if (form.post.isString) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Kod pocztowy musi się składać z cyfr\n');
        }
        if (form.street.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nazwa ulicy musi być dłuższa niż dwie litery\n');
        }
        if (isNaN(form.houseNumber)) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nr domu musi być cyfrą\n');
        }
        if (isNaN(form.apartmentNumber)) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nr mieszkania musi być cyfrą, lub gdy brak zostaw puste\n');
        } else if (form.apartmentNumber.length === 0) {
            isValid = true;
        }
        if (!form.email.includes('@')) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Adres mailowy musi zawierać "@"\n');
        }
        if (isNaN(form.quantity)) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Ilość musi być cyfrą\n');
        }

        return isValid;
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='form__container txt'>
                <input className='form__input' onChange={handleChange} value={form.name} name='name'
                       placeholder='Imię'/>
                <input className='form__input' onChange={handleChange} value={form.surname} name='surname'
                       placeholder='Nazwisko'/>
                <input className='form__input' onChange={handleChange} value={form.city} name='city'
                       placeholder='Miasto'/>
                <input className='form__input' onChange={handleChange} value={form.post} name='post'
                       placeholder='Kod pocztowy'/>
                <input className='form__input' onChange={handleChange} value={form.street} name='street'
                       placeholder='Ulica'/>
                <input className='form__input' onChange={handleChange} value={form.houseNumber} name='houseNumber'
                       type='number' placeholder='Nr domu'/>
                <input className='form__input' onChange={handleChange} value={form.apartmentNumber}
                       name='apartmentNumber'
                       type='number' placeholder='Nr mieszkania'/>
                <input className='form__input' onChange={handleChange} value={form.email} name='email' type='email'
                       placeholder='e-mail'/>
                <input className='form__input' onChange={handleChange} value={form.quantity} name='quantity'
                       type='number'
                       placeholder='Ilość'/>
                <span className='check__label'>Zapoznałem się z regulaminem i RODO</span>
                <input className='form__check' onChange={handleChange} value={form.check} name='check' type='checkbox'/>
                <button type='submit' className='form__btn btn' onClick={handleSubmit}>Zamawiam</button>
            </form>
            <div>{errMsg}</div>
            <div className='shop__img'>{null}</div>
        </>
    );
}