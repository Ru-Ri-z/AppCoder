import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//screens
import CursoDeMotricidad from '../screens/cursoDeMotricidad';
import CursoPAyRCP from '../screens/cursoPayRcp';
import Inicio from '../screens/inicio';
import TodosLosCursos from '../screens/todosLosCursos';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
        >
            <Tab.Screen name="Motricidad" component={CursoDeMotricidad} />
            <Tab.Screen name="Inicio" component={Inicio} />
            <Tab.Screen name="Rcp" component={CursoPAyRCP} />
            <Tab.Screen name="Todos los cursos" component={TodosLosCursos} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}