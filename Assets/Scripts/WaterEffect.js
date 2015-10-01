var waterLevel : float;
private var isUnderWater : boolean;
private var normalColor : Color;
private var underWaterColor : Color;

function Start () 
{

                normalColor = new Color (0.5f, 0.5f, 0.5f, 0.5f);
                underWaterColor = new Color(0.22f, 0.65f, 0.77f, 0.5f);
                RenderSettings.fogDensity = 0f;
}

function Update () 
{
                if ((transform.position.y < waterLevel) != isUnderWater)
                {
                               isUnderWater = transform.position.y < waterLevel;
                               if(isUnderWater) SetUnderWater ();
                               if(!isUnderWater) SetNormal ();
                }
}
function SetNormal ()
{
                RenderSettings.fogColor = normalColor;
                RenderSettings.fogDensity = 0f;
}
function SetUnderWater ()
{
                RenderSettings.fogColor = underWaterColor;
                RenderSettings.fogDensity = 0.025f;
}
