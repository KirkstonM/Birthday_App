import Home from './Pages/Home/Home';
import Poem from './Pages/Poem/Poem';
import Story from './Pages/Story/Story';
import PhotoGallery from './Pages/PhotoGallery/PhotoGallery';

export const routes = [
    {
        path: '/',
        element: Home,
        displayName: 'Home'
    },
    {
        path: '/poem',
        element: Poem,
        displayName: 'Poem'
    },
    {
        path: '/story',
        element: Story,
        displayName: 'Story'
    },
    {
        path : '/gallery',
        element: PhotoGallery,
        displayName : 'Gallery'
    }
];
