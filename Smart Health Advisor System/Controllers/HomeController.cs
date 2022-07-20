using Microsoft.AspNetCore.Mvc;
using Smart_Health_Advisor_System.Models;
using System.Diagnostics;

namespace Smart_Health_Advisor_System.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        } 
        public IActionResult Index2()
        {
            return View();
        } 
        public IActionResult Index3()
        {
            return View();
        } 
        public IActionResult About()
        {
            return View();
        } 
        public IActionResult Gallary()
        {
            return View();
        }
        public IActionResult Gallary2()
        {
            return View();
        }
        public IActionResult Gallary3()
        {
            return View();
        }
        public IActionResult Gallary4()
        {
            return View();
        } 
        
        public IActionResult Team()
        {
            return View();
        }
        public IActionResult Team2()
        {
            return View();
        }
        public IActionResult Team3()
        {
            return View();
        }
        public IActionResult Team4()
        {
            return View();
        } 
        public IActionResult Service()
        {
            return View();
        }
        public IActionResult Blog()
        {
            return View();
        }
        public IActionResult Blog2()
        {
            return View();
        }
        public IActionResult BlogRight()
        {
            return View();
        } 
        public IActionResult BlogDetail()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}