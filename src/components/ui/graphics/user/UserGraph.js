import React from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';

// estilos css
import '../Graphics.css';

const UserGraph = () => {

    // accediendo al state de usuarios
    const { users } = useSelector( state => state.users );
    // labels para la grafica
    const labels = users ? users.map( user => user.name ) : null;
    // valores a mostrar en la grafica
    const clientsAdded = users ? users.map( user => user.clientsAdded ) : null;

    // accediendo a la variable root de css
    const elementColorAlt = document.styleSheets[1].cssRules[1].style.getPropertyValue('--element-color-alt');
    // accediendo a la variable root de css
    const elementColor = document.styleSheets[1].cssRules[1].style.getPropertyValue('--element-color');
    

    // data de la grafica, requerida
    const data = {
        labels,
        datasets: [{
            label: 'total clientes agregados',
            backgroundColor: elementColorAlt,
            borderColor: elementColor,
            borderWidth: 1,
            data: clientsAdded
        }]
    }

    // opciones de la grafica
    const options = {
        maintainAspectRadio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Clientes agregados por usuario'
            }
        }
    }
    return (
        <div className='graphic__container'>
            <Bar 
                options={ options }
                data={ data }
            />
        </div>
    );
}
 
export default UserGraph;