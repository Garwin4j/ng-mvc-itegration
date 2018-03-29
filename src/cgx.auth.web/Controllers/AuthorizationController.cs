using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace cgx.auth.web.Controllers
{
    public class AuthorizationController : Controller
    {
        // GET: Authorization
        public ActionResult Index(Int32? id)
        {
            return View();
        }
    }
}