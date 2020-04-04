import { createGlobalState } from 'react-hooks-global-state';

export const defaultResults = {
  id: 0,
  name: '',
  url: '',
  releaseDate: 0,
  platforms: []
}

const { useGlobalState } = createGlobalState({
  currentGame:
    {
      name: '',
      url: '',
      platforms: [],
      releaseDate: 0
    },
  results: [
    defaultResults
  ],
  searchLoading: false,
  loading: false
});

export default useGlobalState;