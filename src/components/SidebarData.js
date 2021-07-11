import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {ImRoad}  from 'react-icons/im';
import {FaBuilding}  from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Predios',
    path: '/predios',
    icon: <FaBuilding />,
    cName: 'nav-text'
  },
  {
    title: 'Adicionar predio',
    path: '/addpredio',
    icon: <FaBuilding />,
    cName: 'nav-text'
  },
  {
    title: 'Estradas',
    path: '/estradas',
    icon: <ImRoad />,
    cName: 'nav-text'
  },
  {
    title: 'Adicionar estrada',
    path: '/addestradas',
    icon: <ImRoad />,
    cName: 'nav-text'
  }
];
