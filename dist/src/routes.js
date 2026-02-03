"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importStar(require("express"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const UpdatedUserController_1 = require("./controllers/user/UpdatedUserController");
const CreateHaircutController_1 = require("./controllers/haircut/CreateHaircutController");
const ListHaircutConrtoller_1 = require("./controllers/haircut/ListHaircutConrtoller");
const UpdateHaircutController_1 = require("./controllers/haircut/UpdateHaircutController");
const CheckSubscriptionController_1 = require("./controllers/haircut/CheckSubscriptionController");
const CountHaircutscontroller_1 = require("./controllers/haircut/CountHaircutscontroller");
const DetailHaircutController_1 = require("./controllers/haircut/DetailHaircutController");
const NewScheduleController_1 = require("./controllers/schedule/NewScheduleController");
const ListScheduleController_1 = require("./controllers/schedule/ListScheduleController");
const FinishScheduleController_1 = require("./controllers/schedule/FinishScheduleController");
const SubscribeController_1 = require("./controllers/subscriptions/SubscribeController");
const WebhooksController_1 = require("./controllers/subscriptions/WebhooksController");
const CreatePortalController_1 = require("./controllers/subscriptions/CreatePortalController");
const router = (0, express_1.Router)();
exports.router = router;
// -- ROTAS DE USUÁRIOS --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
router.put('/users', isAuthenticated_1.isAuthenticated, new UpdatedUserController_1.UpdatedUserController().handle);
// -- ROTAS DE HAIRCUTS --
router.post('/haircut', isAuthenticated_1.isAuthenticated, new CreateHaircutController_1.CreateHaircutController().handle);
router.get('/haircuts', isAuthenticated_1.isAuthenticated, new ListHaircutConrtoller_1.ListHaircutController().handle);
router.put('/haircut', isAuthenticated_1.isAuthenticated, new UpdateHaircutController_1.UpdateHaircutController().handle);
router.get('/haircut/check', isAuthenticated_1.isAuthenticated, new CheckSubscriptionController_1.CheckSubscriptionController().handle);
router.get('/haircut/count', isAuthenticated_1.isAuthenticated, new CountHaircutscontroller_1.CountHaircutsController().handle);
router.get('/haircut/detail', isAuthenticated_1.isAuthenticated, new DetailHaircutController_1.DetailHaircutController().handle);
// -- ROTAS DE AGENDAMENTOS --
router.post('/schedule', isAuthenticated_1.isAuthenticated, new NewScheduleController_1.NewScheduleController().handle);
router.get('/schedules', isAuthenticated_1.isAuthenticated, new ListScheduleController_1.ListScheduleController().handle);
router.delete('/schedule', isAuthenticated_1.isAuthenticated, new FinishScheduleController_1.FinishScheduleController().handle);
// -- ROTAS DE PAGAMENTO --
router.post('/subscribe', isAuthenticated_1.isAuthenticated, new SubscribeController_1.SubscribeController().handle);
router.post('/webhooks', express_1.default.raw({ type: 'application/json' }), new WebhooksController_1.WebhooksController().handle);
router.post('/create-portal', isAuthenticated_1.isAuthenticated, new CreatePortalController_1.CreatePortalController().handle);
