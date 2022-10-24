export default {
    USERS: {
        MESSAGES: {
            ERROR: {
                BODY_MISSING_FIELDS: 'Todos os campos são obrigatórios!',
                EMAIL_REPEAT: 'E-mail já cadastrado no sistema.',
                USER_NOT_EXIST: 'Não foi encontrado nenhum usuário com o ID informado.'
            }
        }
    },
    LOGIN: {
        MESSAGES: {
            ERROR: {
                EMAIL_NOT_EXIST: 'O e-mail informado não está cadastrado no sistema.',
                PASSWORD_INCORRECT: 'A senha informada está incorreta.'
            }
        }
    },
    AUTH: {
        MESSAGES: {
            ERROR: {
                TOKEN_INVALID: 'Token inválido ou ausente!'
            }
        }
    },
    TYPES_ERROR: {
        UNAUTHORIZED: 'UnauthorizedError',
    },
    APP: {
        MESSAGES: {
            DEBUG: {
                USERS_CONTROLLER: 'app:Users-Controller',
                LOGIN_CONTROLLER: 'app:Login-Controller',
                USERS_MIDDLEWARE: 'app:Users-Middleware',
                LOGIN_MIDDLEWARE: 'app:Login-Middleware',
                APLICATION_STATUS: 'Server running successfully'
            }
        }
    }
}