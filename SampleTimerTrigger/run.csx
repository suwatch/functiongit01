#r "Newtonsoft.Json"

using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public static Task<JObject> Run(TimerInfo timerInfo, TraceWriter log)
{
    var result = JObject.FromObject(new { result = timerInfo });
    log.Info("C# Timer trigger function executed. " + result);
    return Task.FromResult(result);
}