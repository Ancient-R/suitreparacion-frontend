import React, { useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';

// estilos css
import '../Graphics.css'
import { useDispatch, useSelector } from 'react-redux';
import { getStatusDevices } from '../../../../actions/devicesActions';

const DeviceGraph = () => {

    // dispatch para los actions
    const dispatch = useDispatch();

    // accediendo al state de autenticación
    const { logged } = useSelector( state => state.auth );

    // accediendo al state de dispositivos
    const { devicesStatus } = useSelector( state => state.devices );
    const devicesData = devicesStatus ? [ devicesStatus.nuevoIngreso, devicesStatus.enRevision, devicesStatus.reparado, devicesStatus.noReparado, devicesStatus.entregado ] : null;

    // accediendo a la variable root de css
    const elementColorAlt = document.styleSheets[1].cssRules[1].style.getPropertyValue('--element-color-alt');
    // accediendo a la variable root de css
    const elementColor = document.styleSheets[1].cssRules[1].style.getPropertyValue('--element-color');
    

    // data de la grafica, requerida
    const data = {
        labels: ['Nuevo ingreso', 'En revisión', 'Reparado', 'No reparado', 'Entregado'],
        datasets: [{
            label: 'Total de dispositivos',
            backgroundColor: elementColorAlt,
            borderColor: elementColor,
            borderWidth: 1,
            data: devicesData
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
                text: 'Dispositivos por estado'
            }
        }
    }

    useEffect( () => {
        if( logged ) dispatch( getStatusDevices() );
    }, []);
    return (

        <div className='graphic__container'>
            <Bar 
                options={ options }
                data={ data }
            />
        </div>
    );
}
 
export default DeviceGraph;