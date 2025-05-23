import React from 'react';
import { render, screen } from '@testing-library/react';
import Player from './Player';

describe('Player', () => {
  it('renders the current song title', () => {
    const songs = [
      { title: 'Test Song', artist: 'Test Artist', img_src: '', src: '' },
      { title: 'Another Song', artist: 'Another Artist', img_src: '', src: '' }
    ];
    render(
      <Player
        currentSongIndex={0}
        setCurrentSongIndex={() => {}}
        nextSongIndex={1}
        setNextSongIndex={() => {}}
        songs={songs}
      />
    );
    expect(screen.getByText('Test Song')).toBeInTheDocument();
  });
}); 