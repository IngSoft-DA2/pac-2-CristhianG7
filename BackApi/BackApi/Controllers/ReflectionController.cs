using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic;

namespace BackApi.Controllers
{
    [Route("api/reflection")]
    [ApiController]
    public class ReflectionController(ImportService importerService) : ControllerBase
    {
        [HttpGet("importers")]
        public IActionResult getImporters()
        {
           var importers = importerService.GetAllImporters();
           return Ok(importers);
        }
    }
}
