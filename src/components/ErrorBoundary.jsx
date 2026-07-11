import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Unerwarteter Fehler beim Rendern:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          role="alert"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            padding: "2rem",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
            background: "#fbf7f0",
            color: "#201c16",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Etwas ist schiefgelaufen</h1>
          <p style={{ margin: 0, maxWidth: "32rem", opacity: 0.75 }}>
            Die Seite konnte nicht geladen werden. Bitte lade die Seite neu. Falls das Problem
            weiterhin besteht, kontaktiere uns unter fustuk999.heilbronn@gmail.com.
          </p>
          <pre
            style={{
              marginTop: "1rem",
              maxWidth: "40rem",
              overflowX: "auto",
              fontSize: "0.75rem",
              opacity: 0.6,
              textAlign: "left",
            }}
          >
            {String(this.state.error?.message || this.state.error)}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
