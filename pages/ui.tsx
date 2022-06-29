import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';
import { ToggleEffect } from './../services/effect';
import { t_Effect } from '../interfaces/t_Effect';
import effects from './../services/effects';
import UI from '@template/UI/UI'
import { useEffect, useState } from 'react';
import init from './../services/twitch_bot';


export async function getServerSideProps(context) {
  init();
  return {
    props: { effects },
  };
}

const ui = (args) => {
  return <Default>
    <UI {...args}/>
  </Default>;
};
export default ui;
