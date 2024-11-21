import React from 'react';

function Logout({ onLogout }) {
  return (
    <button
      className='py-2 px-6 rounded-3xl border border-red-500 hover:bg-slate-200 duration-300 cursor-pointer'
      onClick={onLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
