import './App.css';
import {TodoComponentsJson} from "./components/jsonComponents/TodoComponentsJson.tsx";
import {TodoComponentsDummy} from "./components/dummyComponents/TodoComponentsDummy.tsx";
import {FC} from "react";

export const App :FC = () => {

    return (
        <div className='grid grid-cols-2'>
            <div className='bg-gray-300'>
                <h2 className='font-bold'>From JsonPlaceHolder</h2>
                <TodoComponentsJson/>
            </div>
            <div className='bg-indigo-300'>
                <h2 className='font-bold'>From DummyJson</h2>
                <TodoComponentsDummy/>
            </div>
        </div>
    );
};

