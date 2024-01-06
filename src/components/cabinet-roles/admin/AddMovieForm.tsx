
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { request } from '../../../utils/axios-interceptors';
import { addMovie } from '../../../services/magnusMovie-service';
import Swal from 'sweetalert2';
import { useState } from 'react';
import Spinner from '../../spinner/Spinner';

interface MovieData {
    title: string;
    year: string;
    url: string;
    poster: string;
    genre: string;
    backdropScreen: string;
}

const AddMovieForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const initialValues = {
        title: '',
        year: '',
        url: '',
        poster: '',
        genre: '',
        backdropScreen: ''
    };

    const validationSchema = Yup.object({
        title: Yup.string()
            .min(2, 'Title must be at least 2 characters')
            .max(50, 'Title must be less than 50 characters')
            .required('Title is required'),
        year: Yup.string()
            .required('Year is required'),
        url: Yup.string()
            .url('Invalid URL format')
            .required('URL is required'),
        poster: Yup.string()
            .url('Invalid URL format')
            .required('Poster URL is required'),
        genre: Yup.string()
            .min(2, 'Genre must be at least 2 characters')
            .max(50, 'Genre must be less than 50 characters')
            .required('Genre is required'),
        backdropScreen: Yup.string()
            .url('Invalid URL format')
            .required('Backdrop screen URL is required')
    });

    const handleSubmit = async (values: MovieData) => {
        setLoading(true);
        try {
            const response = await addMovie(values);
            Swal.fire({
                title: 'Movie Added Successfully',
                icon: 'success',
                timer: 2000,
            });
            navigate('/adminHome');
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Failed to add movie',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            {loading && <Spinner title='Loading...' />} {/* Отображение спиннера при загрузке */}
            <div className="w-2/3 flex flex-col items-center space-y-6 bg-white p-10 rounded-lg shadow-lg">

                <button
                    onClick={() => navigate('/adminHome')}
                    className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition duration-300 ease-in-out m-4 md:ml-4 lg:ml-2 xl:ml-1"
                >
                    To Admin Panel
                </button>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="w-full">
                        <div className="flex flex-col space-y-4 w-full p-2 border border-gray-700 rounded">
                            <Field name="title" type="text" placeholder="Title" className="w-full p-4 border border-gray-300 rounded" />
                            <Field name="year" type="text" placeholder="Year" className="w-full p-4 border border-gray-300 rounded" />
                            <Field name="url" type="text" placeholder="URL" className="w-full p-4 border border-gray-300 rounded" />
                            <Field name="poster" type="text" placeholder="Poster URL" className="w-full p-4 border border-gray-300 rounded" />
                            <Field name="genre" type="text" placeholder="Genre" className="w-full p-4 border border-gray-300 rounded" />
                            <Field name="backdropScreen" type="text" placeholder="Backdrop Screen URL" className="w-full p-4 border border-gray-300 rounded" />
                        </div>
                        <button type="submit" className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition duration-300 ease-in-out">Add Movie</button>
                    </Form>
                </Formik>
            </div>
        </div>




    );
};

export default AddMovieForm;
