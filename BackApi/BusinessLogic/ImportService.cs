using System.Reflection;
using IImporter;

namespace BusinessLogic;

public class ImportService
{
    public List<string> GetAllImporters()
    {
        var importersPath = "./reflections";
        string[] filePaths = Directory.GetFiles(importersPath);
        List<string> dllNames = new List<string>();

        foreach (string file in filePaths)
        {
            if (FileIsDll(file))
            {
                FileInfo dllFile = new FileInfo(file);
                Assembly assembly = Assembly.LoadFile(dllFile.FullName);

                if (ContainsPublicTypeAndNoAbstract(assembly))
                {
                    dllNames.Add(dllFile.Name);
                }
            }
        }
        return dllNames;
    }
    private bool FileIsDll(string file)
    {
        return file.EndsWith(".dll");
    }

    public bool ContainsPublicTypeAndNoAbstract(Assembly assembly)
    {
        return assembly.GetTypes().Any(t =>
            typeof(ImporterInterface).IsAssignableFrom(t) &&
            t.IsPublic &&
            !t.IsAbstract &&
            !t.IsInterface);
    }
}