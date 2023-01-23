import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateGroup } from './components/CreateGroup';
import { AddMembers } from './components/AddMembers';
import { ExpenseMain } from './components/ExpenseMain';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateGroup />} />
      <Route path="/members" element={<AddMembers />} />
      <Route path="/expense" element={<ExpenseMain />} />
    </Routes>
  </BrowserRouter>
);

export default App;
