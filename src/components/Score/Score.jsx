import React from 'react'

import ReUsableScore from '../ReUsableScore/ReUsableScore'

const Score = () => {
  return (
    <>
      <ReUsableScore
        team1="Barcelona"
        team2="Liverpool"
        team1score={3}
        team2core={0}
      />
    </>
  );
}

export default Score