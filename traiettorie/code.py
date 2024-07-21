from flask import Flask, render_template
import plotly.graph_objects as go
import plotly.express as px
import numpy as np

app = Flask(__name__)

def generate_planet_trajectory():
    # Dati approssimativi per le traiettorie dei pianeti
    # Questi dati dovrebbero essere sostituiti con dati più accurati
    planets = {
        'Mercurio': {'a': 0.39, 'b': 0.38, 'color': 'gray'},
        'Venere': {'a': 0.72, 'b': 0.72, 'color': 'yellow'},
        'Terra': {'a': 1.00, 'b': 1.00, 'color': 'blue'},
        'Marte': {'a': 1.52, 'b': 1.52, 'color': 'red'},
        'Giove': {'a': 5.20, 'b': 5.20, 'color': 'orange'},
        'Saturno': {'a': 9.58, 'b': 9.58, 'color': 'gold'},
        'Urano': {'a': 19.22, 'b': 19.22, 'color': 'lightblue'},
        'Nettuno': {'a': 30.05, 'b': 30.05, 'color': 'darkblue'}
    }

    fig = go.Figure()

    for planet, data in planets.items():
        t = np.linspace(0, 2 * np.pi, 100)
        x = data['a'] * np.cos(t)
        y = data['b'] * np.sin(t)
        fig.add_trace(go.Scatter(x=x, y=y, mode='lines', name=planet, line=dict(color=data['color'])))

    fig.update_layout(title='Traiettorie Gravitazionali dei Pianeti del Sistema Solare',
                      xaxis_title='Distanza (AU)',
                      yaxis_title='Distanza (AU)',
                      showlegend=True)

    return fig.to_html(full_html=False)

@app.route('/')
def index():
    plot_html = generate_planet_trajectory()
    return render_template('index.html', plot_html=plot_html)

if __name__ == '__main__':
    app.run(debug=True)
