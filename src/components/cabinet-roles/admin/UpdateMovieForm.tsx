import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { getMovieDetails, updateMovie } from '../../../services/magnusMovie-service';
import Swal from 'sweetalert2';
import Spinner from '../../spinner/Spinner';
import { Movie } from '../../../interfaces/types';

const UpdateMovieForm = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [initialValues, setInitialValues] = useState<Movie>({
        id: 0,
        title: '',
        year: '',
        url: '',
        poster: '',
        genre: '',
        backdropScreen: ''
    });

    useEffect(() => {
        if (movieId) {
            setLoading(true);
            getMovieDetails(+movieId).then(data => {
                setInitialValues(data);
                setLoading(false);
            }).catch(error => {
                console.error('Error fetching movie details:', error);
                setLoading(false);
            });
        }
    }, [movieId]);


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

    const handleSubmit = async (values: Movie) => {
        setLoading(true);
        try {
            const id = movieId ? parseInt(movieId, 10) : null;
            if (!id) {
                Swal.fire('Error', 'Invalid movie ID', 'error');
                setLoading(false);
                return;
            }

            await updateMovie(id, values);
            Swal.fire('Updated!', 'Movie updated successfully', 'success');
            navigate('/admin-home');
        } catch (error) {
            Swal.fire('Error', 'Failed to update movie', 'error');
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
    <div className="w-2/3 flex flex-col items-center space-y-6 bg-white p-10 rounded-lg shadow-lg">
        
        <div className="flex justify-between w-full mb-4">
            <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
            <button
                onClick={() => navigate('/adminHome')}
                className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition duration-300 ease-in-out"
            >
                To Admin Panel
            </button>
        </div>

        {loading && <Spinner title='Loading...' />}

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
                        <button type="submit" className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition duration-300 ease-in-out">Update Movie</button>
                    </Form>
                </Formik>
            </div>
        </div>




    );
};

export default UpdateMovieForm;
