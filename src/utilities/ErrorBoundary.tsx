import React from 'react'
interface Props {
  children: React.ReactNode
  // si uno de los hijos muere se muestra este componente
  fallBackComponent: React.ReactNode
  resetCondition?: any
  error?: boolean
}
interface State {
  hasError: boolean
  resetCondition: any
}
// Muestra un error controlado
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, resetCondition: props.resetCondition }
  }
  // si algun hijo muere retorna un error
  // los errores van a reconocerse durante un render o un hook ej: useEffect
  // cualquier otra cosa no lo va a reconocer ej setTimeout
  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  // se dispara cuando cambia una prop y acciona antes de hacer un render
  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.resetCondition !== state.resetCondition) {
      return { hasError: false, resetCondition: props.resetCondition }
    }
    return null
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return this.props.fallBackComponent
    }
    return this.props.children
  }
}

export default ErrorBoundary
