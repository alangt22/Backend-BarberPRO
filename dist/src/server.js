"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
// ✅ WEBHOOK COM BODY RAW (ANTES DE TUDO)
/* app.post(
  '/webhooks',
  bodyParser.raw({ type: 'application/json' }),
  new WebhooksController().handle
);
 */
app.use((req, res, next) => {
    if (req.originalUrl === '/webhooks') {
        next();
    }
    else {
        express_1.default.json()(req, res, next);
    }
});
// resto da aplicação
/* app.use(express.json()); */
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});
app.listen(3333, () => console.log('Server is running on port 3333'));
