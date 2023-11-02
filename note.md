# Hạ Version React 18 Xuống 17
    - file package.json
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
    - file index.js 
        import ReactDOM from 'react-dom';
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
        );

    - Run "npm install"