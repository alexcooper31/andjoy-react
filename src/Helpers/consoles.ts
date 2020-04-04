export default (value: Number) => {
  switch(value) {
    case 48: {
      return 'PS4'
    }
    case 49: {
      return 'XONE'
    }
    case 130: {
      return 'SWITCH'
    }
    case 6: {
      return 'PC'
    }
    default: {
      return 'OTHERS'
    }
  }
}