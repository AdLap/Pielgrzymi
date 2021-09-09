import React, { useState } from "react";
import { send } from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
        msg: '',
        check: false
    });

    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('')

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeCheckbox = () => {
        setForm(form => {
            return {
                ...form,
                check: !form.check
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrMsg('');
        if (validate()) {
            send('pbm', 'order', form, 'user_ll8Xyyti56HCpjtirE4VV')
                .catch(error => alert('Coś poszło nie tak...\n', error.text));
            setSuccessMsg('Formularz wysłany');
            setForm({
                name: '',
                surname: '',
                city: '',
                post: '',
                street: '',
                houseNumber: '',
                apartmentNumber: '',
                email: '',
                quantity: '',
                msg: '',
                check: false
            })
        }
    }

    const validate = () => {
        let isValid = true;

        if (form.name.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Imię musi być dłuższe niż dwie litery\n');
        }
        if (form.surname.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nazwisko musi być dłuższe niż dwie litery\n');
        }
        if (form.city.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nazwa miasta musi być dłuższe niż dwie litery\n');
        }
        if (!form.post.match(/^[0-9]{2}-[0-9]{3}$/)) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Kod pocztowy musi się składać z cyfr i mieć format XX-XXX\n');
        }
        if (form.street.length <= 2) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Nazwa ulicy musi być dłuższa niż dwie litery\n');
        }
        if (form.houseNumber < 1) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Podaj nr domu\n');
        }
        if (isNaN(form.apartmentNumber)) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Wpisz nr, lub zostaw puste\n');
        }
        if (!form.email.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i)) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Błędny adres email\n');
        }
        if (form.quantity < 1) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Minimalna ilość to 1\n');
        }
        if (form.msg.length >= 120) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Wiadmomość może mieć maksymalnie 120 znaków\n');
        }
        if (!form.check) {
            isValid = false;
            setErrMsg(prevMsg => prevMsg + 'Musisz wyrazić zgodę');
        }

        return isValid;
    }

    return (
        <>
            <form onSubmit={handleSubmit} autoComplete='off' className='form__container txt'>
                <div className='form__box'>
                    <label className='form__label'>Imię</label><br />
                    <input className='form__input' onChange={handleChange} value={form.name} name='name'
                        placeholder='Imię' />
                </div>
                <div className='form__box'>
                    <label className='form__label'>Nazwisko</label><br />
                    <input className='form__input' onChange={handleChange} value={form.surname} name='surname'
                        placeholder='Nazwisko' />
                </div>
                <div className='form__box'>
                    <label className='form__label'>Miasto</label><br />
                    <input className='form__input' onChange={handleChange} value={form.city} name='city'
                        placeholder='Miasto' />
                </div>
                <div className='form__box'>
                    <label className='form__label'>Kod pocztowy</label><br />
                    <input className='form__input' onChange={handleChange} value={form.post} name='post'
                        placeholder='__-___' />
                </div>
                <div className='form__box'>
                    <label className='form__label'>Ulica</label><br />
                    <input className='form__input' onChange={handleChange} value={form.street} name='street'
                        placeholder='Ulica' />
                </div>
                <div className='form__box'>
                    <label className='form__label'>Nr domu</label><br />
                    <input className='form__input' onChange={handleChange} value={form.houseNumber} name='houseNumber'
                        placeholder='Nr domu' />
                </div>
                <div className='form__box'>
                    <label className='form__label'>Nr mieszkania</label><br />
                    <input className='form__input' onChange={handleChange} value={form.apartmentNumber}
                        name='apartmentNumber'
                        type='number' placeholder='Nr mieszkania' />
                </div>
                <div className='form__box'>
                    <label className='form__label'>e-mail</label><br />
                    <input className='form__input' onChange={handleChange} value={form.email} name='email' type='email'
                        placeholder='e-mail' />
                </div>
                <div className='form__box'>
                    <label className='form__label'>Ilość</label><br />
                    <input className='form__input' onChange={handleChange} value={form.quantity} name='quantity'
                        type='number'
                        placeholder='Ilość' />
                </div>
                <div className='form__box'>
                    <label className='form__label'>Wiadomość (opcjonalnie)</label><br />
                    <textarea className='form__input form__msg' onChange={handleChange} value={form.msg} name='msg'
                        rows='4' columns='32' placeholder='Wpisz wiadomość...' />
                </div>
                <div className='form__check'>
                    <input className='form__check__input' type='checkbox' value={form.check} onChange={handleChangeCheckbox} name='check' />
                    <span className='form__checkbox__fake form__input'>{form.check ? <FontAwesomeIcon icon={faCheck} /> : null}</span>
                    <label className='check__label'>Zapoznałem się z regulaminem i RODO</label>
                </div>

                <button type='submit' className='form__btn btn' onClick={handleSubmit}>Zamawiam</button>
                <div className='form__msg__err' style={{ whiteSpace: 'pre-wrap' }}>{errMsg}</div>
                <div className='form__msg__success'>{successMsg}</div>
            </form>

            <div className='shop__img'>{null}</div>
        </>
    );
}
