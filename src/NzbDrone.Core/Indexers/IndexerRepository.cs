﻿using System.Data;
using Marr.Data;
using NzbDrone.Core.Datastore;
using NzbDrone.Core.Messaging.Events;
using NzbDrone.Core.ThingiProvider;


namespace NzbDrone.Core.Indexers
{
    public interface IIndexerRepository : IProviderRepository<IndexerDefinition>
    {
    }

    public class IndexerRepository : ProviderRepository<IndexerDefinition>, IIndexerRepository
    {
        public IndexerRepository(IDatabase database, IEventAggregator eventAggregator)
            : base(database, eventAggregator)
        {
        }
    }
}
