﻿using Microsoft.AspNetCore.Blazor.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorDash.Client.Components
{
    public class WorldMapModel : BlazorComponent
    {
        protected void InitWorldMap()
        {
            JSRuntime.Current.InvokeAsync<bool>("initWorldMap");
            
        }       
    }
}
