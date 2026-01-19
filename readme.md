**Запуск**
- запустить docker engine
- заменить '???' на необходимые значения

        SECRET_KEY: ??? 
        MONGODB_DOMEN: ??? 
        FRONTEND_URI: ???
        REACT_APP_API_BASE_URL=???
- запустить приложение командой: docker compose up 

**Пример значений**

    SECRET_KEY: 1344324142442443
    MONGODB_DOMEN: mongodb
    FRONTEND_URI: http://localhost:3000
    REACT_APP_API_BASE_URL=http://localhost:8000